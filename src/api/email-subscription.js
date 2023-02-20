import fetch from "node-fetch";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
};

export default async function formHandler(req, res) {
  const email = req.body.email;

  try {
    const exists = await doesMemberExist(email);
    if (exists) {
      return res.status(400).json("Member Exists");
    }

    await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers,
      body: JSON.stringify({
        email,
        groups: [process.env.MAILERLITE_MAIN_GROUP],
      }),
    });

    return res.status(200).json({ text: "Ok" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function doesMemberExist(email) {
  const resp = await fetch(
    "https://connect.mailerlite.com/api/subscribers/" + email,
    {
      headers,
    }
  );

  const data = await resp.json();

  console.log(data);

  return data?.data?.status === "active";
}
