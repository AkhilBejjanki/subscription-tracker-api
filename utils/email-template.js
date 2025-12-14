export const generateEmailTemplate = ({
  userName,
  subscriptionName,
  renewalDate,
  planName,
  price,
  paymentMethod,
  accountSettingsLink,
  supportLink,
  daysLeft,
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subscription Renewal Reminder</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fb;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <!-- Main Card -->
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);">
      
      <!-- Minimal Header -->
      <tr>
        <td style="padding: 24px 32px; border-bottom: 1px solid #f0f0f0;">
          <p style="margin: 0; font-size: 14px; font-weight: 600; color: #1b6b4a; text-transform: uppercase; letter-spacing: 0.5px;">Subscription</p>
        </td>
      </tr>
      
      <!-- Main Content -->
      <tr>
        <td style="padding: 32px;">
          <!-- Greeting -->
          <p style="margin: 0 0 24px 0; font-size: 18px; color: #1a1a1a; font-weight: 500;">Hey ${userName},</p>
          
          <!-- Message -->
          <p style="margin: 0 0 32px 0; font-size: 15px; line-height: 1.6; color: #555;">
            Your <strong style="color: #1a1a1a;">${subscriptionName}</strong> subscription renews on <strong style="color: #1a1a1a;">${renewalDate}</strong> — that's in ${daysLeft} ${daysLeft === 1 ? 'day' : 'days'}.
          </p>
          
          <!-- Details Card -->
          <div style="background-color: #f8f9fb; border-left: 4px solid #1b6b4a; border-radius: 8px; padding: 20px; margin-bottom: 32px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding: 8px 0;">
                  <p style="margin: 0; font-size: 13px; color: #888;">Plan</p>
                  <p style="margin: 4px 0 0 0; font-size: 15px; color: #1a1a1a; font-weight: 500;">${planName}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0;">
                  <p style="margin: 0; font-size: 13px; color: #888;">Amount</p>
                  <p style="margin: 4px 0 0 0; font-size: 15px; color: #1a1a1a; font-weight: 500;">${price}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0;">
                  <p style="margin: 0; font-size: 13px; color: #888;">Payment Method</p>
                  <p style="margin: 4px 0 0 0; font-size: 15px; color: #1a1a1a; font-weight: 500;">${paymentMethod}</p>
                </td>
              </tr>
            </table>
          </div>
          
          <!-- CTA Buttons -->
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 24px;">
            <tr>
              <td style="padding-right: 12px;">
                <a href="${accountSettingsLink}" style="display: block; background-color: #1b6b4a; color: #ffffff; text-decoration: none; border-radius: 6px; padding: 12px 24px; font-size: 14px; font-weight: 600; text-align: center;">Manage Subscription</a>
              </td>
              <td style="padding-left: 12px;">
                <a href="${supportLink}" style="display: block; background-color: #f0f0f0; color: #1a1a1a; text-decoration: none; border-radius: 6px; padding: 12px 24px; font-size: 14px; font-weight: 600; text-align: center;">Get Help</a>
              </td>
            </tr>
          </table>
          
          <!-- Secondary Message -->
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #888;">
            Want to update your plan or payment method? Head to your account settings before renewal. No surprises, no hassle.
          </p>
        </td>
      </tr>
      
      <!-- Footer -->
      <tr>
        <td style="padding: 24px 32px; border-top: 1px solid #f0f0f0; background-color: #fafbfc;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td style="padding-bottom: 16px;">
                <p style="margin: 0; font-size: 12px; color: #888;">Subscription Tracker Inc.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p style="margin: 0; font-size: 12px;">
                  <a href="#" style="color: #1b6b4a; text-decoration: none; margin-right: 16px;">Unsubscribe</a>
                  <a href="#" style="color: #1b6b4a; text-decoration: none; margin-right: 16px;">Privacy</a>
                  <a href="#" style="color: #1b6b4a; text-decoration: none;">Terms</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
`;

export const emailTemplates = [
  {
    label: "7 days before reminder",
    generateSubject: (data) =>
      `Your ${data.subscriptionName} renews in 7 days`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 7 }),
  },
  {
    label: "5 days before reminder",
    generateSubject: (data) =>
      `${data.subscriptionName} renews in 5 days`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 5 }),
  },
  {
    label: "2 days before reminder",
    generateSubject: (data) =>
      `Quick reminder: ${data.subscriptionName} renews in 2 days`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 2 }),
  },
  {
    label: "1 day before reminder",
    generateSubject: (data) =>
      `${data.subscriptionName} renews tomorrow`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 1 }),
  },
];
