using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Courier_MS.MarcentModel
{
    public class ParcelVM
    {
        //[Key]
        public int? ParcelId { get; set; }

        [Required]
        public string? ReceiverName { get; set; } = null!;

        [Required]
        public decimal? Phone { get; set; }

        [Required]
        public int? Weight { get; set; } = null!;

        [Required]
        public string? Address { get; set; } = null!;

        [Required]

        public decimal? Price { get; set; }

        [Required]
        public bool? COD { get; set; }

        public string? Notes { get; set; }
        public decimal Status { get; set; }

        [Required]
        public int PickupLocation { get; set; }

        [Required]
        public int DeliveryLocation { get; set; }
        [Required]
        public int DeliveyCharge { get; set; }
    }
}
