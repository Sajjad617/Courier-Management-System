
using Microsoft.AspNetCore.SignalR;

public class ChatHub : Hub
{
    private readonly IHubContext<ChatHub> _hubContext;

    public ChatHub(IHubContext<ChatHub> hubContext)
    {
        _hubContext = hubContext;
    }
    public async Task SendMessageToClients(string message)
    {
        await Clients.All.SendAsync("ReceiveMessage", message);
    }

    public override async Task OnConnectedAsync()
    {
        Console.WriteLine($"Client connected: {Context.ConnectionId}");
        await base.OnConnectedAsync();
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        Console.WriteLine($"Client disconnected: {Context.ConnectionId}");
        await base.OnDisconnectedAsync(exception);
    }
}
