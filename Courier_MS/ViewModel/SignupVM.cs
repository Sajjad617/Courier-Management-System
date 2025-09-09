namespace Courier_MS.ViewModel
{
    public class SignupVM
    {
        public int Id { get; set; }                 // Primary Key
        public string CompanyName { get; set; }     // Company Name
        public string OwnerName { get; set; }       // Owner's Name
        public string Mobile { get; set; }          // Mobile Number
        public string Email { get; set; }           // Email Address
        public string Type { get; set; }           // User Type 
        public bool Approve { get; set; }           // User Type 
        public string Password { get; set; }        // Password (hash better)

    }
}
