using Courier_MS.Interface;
using System.Net;
using System.Net.Mail;


namespace Courier_MS.Repository
{
    public class MailService : IMail
    {
		private readonly string Server;
		private readonly int Port;
		private readonly string SenderEmail;
		private readonly string Password;
		private readonly bool UseSSL;
		private readonly bool UseStartTls;

        public MailService()
        {
            Server = "smtp.gmail.com";
            Port = 587;
            SenderEmail = "md.sajjad01733@gmail.com";
            Password = "nade xgsr qebj uowi";

        }

        public async Task<dynamic> SendEmailAsync(string toEmail, string subject, string body)
        {
			try
			{
                var message = new MailMessage();
                message.From = new MailAddress(SenderEmail, "Courier MS");
                message.To.Add(toEmail);
                message.Subject = subject;
                message.Body = body;
                message.IsBodyHtml = true;

                using var smtp = new SmtpClient(Server, Port)
                {
                    Credentials = new NetworkCredential(SenderEmail, Password),
                    EnableSsl = true
                };

                await smtp.SendMailAsync(message);
                return 1;
            }
			catch (Exception ex)
			{

				throw;
			}
        }
    }
}
