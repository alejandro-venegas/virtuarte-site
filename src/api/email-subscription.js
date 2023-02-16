const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

const listId = "c9c3135bc9";

export default async function formHandler(req, res) {
  const email = req.body.email;

  try {
    const memberInfo = await getMemberInfo(email);
    if (memberInfo.status === "subscribed") {
      return res.status(400).json({ title: "Member Exists" });
    }

    const response = await client.lists.setListMember(listId, email, {
      email_address: email,
      status_if_new: "subscribed",
      status: "subscribed",
    });

    console.log("hello");

    console.log(response);

    return res.json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function getMemberInfo(email) {
  try {
    const info = await client.lists.getListMember(listId, email);

    return info;
  } catch (e) {
    if (e.status === 404) {
      return null;
    }

    throw { response: { text: "Server Error" } };
  }
}
