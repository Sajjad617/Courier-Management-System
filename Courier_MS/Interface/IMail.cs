namespace Courier_MS.Interface
{
    public interface IMail
    {
        Task<dynamic> SendEmailAsync(string toEmail, string subject, string body);
    }
}
