namespace Courier_MS.ViewModel
{
    public class zoneVM:commonVM
    {
        public int?   cityId { get; set; }
    }
    public class areaVM : commonVM
    {
        public int? zoneId { get; set; }
        public int? Location { get; set; }
    }

}
