const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

export default async function formHandler(req, res) {
  const email = req.body.email;

  try {
    const response = await client.lists.addListMember("c9c3135bc9", {
      email_address: email,
      status: "subscribed",
    });

    console.log(response);

    return res.json(response);
  } catch (error) {
    const data = JSON.parse(error.response.text);
    console.log(data);
    return res.status(400).json(data);
  }
}
