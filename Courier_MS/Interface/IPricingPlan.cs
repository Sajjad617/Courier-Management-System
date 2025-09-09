using Courier_MS.ViewModel;

namespace Courier_MS.Interface
{
    public interface IPricingPlan
    {
        Task<dynamic> GetPricingPlanArea();
        Task<dynamic> SavePricingPlan(PricingPlanVM price);
        Task<dynamic> GetPricingPlan();
        Task<dynamic> DeletePricingPlan(int id);
        Task<dynamic> GetPricingPlanbyID(int id);
    }
}
