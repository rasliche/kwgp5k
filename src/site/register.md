---
layout: "layouts/register.html"
title: Register
---

<img class="rounded-lg overflow-hidden" src="https://res.cloudinary.com/duzmgsio4/image/upload/v1604602821/keywestgroundparrot.com/5k-race-full.png">

<form action="/results" class="p-4 m-6 text-center mx-auto border-2 border-dashed border-red-500" method="post" name="register" netlify netlify-honeypot="bot-field">
    <p class="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
    </p>
    <input type="name" name="name" placeholder="your name" class="p-2 rounded" auto-complete="name" required>
    <input type="email" name="email" placeholder="your email" class="p-2 rounded" auto-complete="email" required>
    <button type="submit" class="p-2 bg-green-200 hover:bg-green-300 rounded">register</button>
</form>
