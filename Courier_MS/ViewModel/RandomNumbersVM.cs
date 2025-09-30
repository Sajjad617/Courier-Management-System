namespace Courier_MS.ViewModel
{
    public class RandomNumbersVM
    {
        public int Id { get; set; }            // Primary key, auto increment
        public int Value { get; set; }         // Random number value
        public DateTime CreatedAt { get; set; } // Insert timestamp
    }
}
