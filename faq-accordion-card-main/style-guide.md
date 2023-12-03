# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

#### Text

- Very dark desaturated blue: hsl(238, 29%, 16%)
- Soft red: hsl(14, 88%, 65%)

#### Gradient

Background gradient:

- Soft violet: hsl(273, 75%, 66%)
- Soft blue: hsl(240, 73%, 65%)

### Neutral

#### Text

- Very dark grayish blue: hsl(237, 12%, 33%)
- Dark grayish blue: hsl(240, 6%, 50%)

#### Dividers

- Light grayish blue: hsl(240, 5%, 91%)

## Typography

### Body Copy

- Font size: 12px

### Font

- Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)
- Weights: 400, 700

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- displays site properly based on user's device -->

    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">

    <title>Frontend Mentor | FAQ Accordion Card</title>

    <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->

    <!-- link css -->
    <link rel="stylesheet" href="style.css">

  </head>

  <body>
    <main class="banner">
      <article class="image-container">
        <img src="./images/illustration-woman-online-mobile.svg" alt="illustration-woman">
        <img src="./images/bg-pattern-desktop.svg" alt="">
      </article>
      <article class="faqs-section">
        <h1>FAQ</h1>
        <div class="faq1">
          <div class="even">
            <p class="qs">How many team members can I invite?</p>
            <img src="./images/icon-arrow-down.svg" alt="">
          </div>
          <p class="faq-answer"> You can invite up to 2 additional users on the Free plan. There is no limit on team
            members for the Premium plan.</p>
        </div>
        <div class="faq2">
          <div class="even">
            <p class="qs">What is the maximum file upload size?</p>
            <img src="./images/icon-arrow-down.svg" alt="">
          </div>
          <p class="faq-answer">No more than 2GB. All files in your account must fit your alloted storage space.</p>
        </div>
        <div class="faq3">
          <div class="even">
            <p class="qs">How do I reset my password?</p>
            <img src="./images/icon-arrow-down.svg" alt="">
          </div>
          <p class="faq-answer">Click “Forgot password” from the login page or “Change password” from your profile
            page.
            A reset link will be emailed to you.</p>
        </div>
        <div class="faq4">
          <div class="even">
            <p class="qs">Can I cancel my subscription?</p>
            <img src="./images/icon-arrow-down.svg" alt="">
          </div>
          <p class="faq-answer">Yes! Send us a message and we’ll process your request no questions asked.</p>
        </div>
        <div class="faq5">
          <div class="even">
            <p class="qs">Do you provide addtional support?</p>
            <img src="./images/icon-arrow-down.svg" alt="">
          </div>
          <p class="faq-answer"> Chat and email support is available 24/7. Phone lines are open during normal business
            hours.
          </p>
        </div>
      </article>
    </main>
  </body>

</html>
