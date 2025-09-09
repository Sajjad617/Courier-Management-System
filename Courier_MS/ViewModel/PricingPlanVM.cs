namespace Courier_MS.ViewModel
{
    public class PricingPlanVM 
    {
        public int? Id { get; set; }
        public int pickupLocation { get; set; }
        public int deliveryLocation { get; set; }
        public int Weight { get; set; }
        public int Price { get; set; }
    }
}
