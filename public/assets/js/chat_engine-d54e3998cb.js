class ChatEngine{constructor(e,s){this.chatBoxID=$("#"+e),this.userEmail=s,this.socket=io.connect("http://:5000",{transports:["websocket"]}),this.userEmail&&this.connectionHandler()}connectionHandler(){let e=this;this.socket.on("connect",(function(){console.log("Connection established using sockets...!!")})),e.socket.emit("join_room",{user_email:e.userEmail,chatroom:"askme"}),e.socket.on("user_joined",(function(e){console.log("a user joined",e)})),$("#send-message").click((function(){console.log("clicker");let s=$("#chat-message-input").val();console.log(s),""!=s&&e.socket.emit("send_message",{message:s,user_email:e.userEmail,chatroom:"askme"})})),e.socket.on("receive_message",(function(s){console.log("message received",s);let o=$("<li>"),t="other-message";e.userEmail==s.user_email&&(t="self-message"),o.append($("<p>",{html:s.user_email})),o.append($("<span>",{html:s.message})),o.addClass(t),$("#chat-messages-list").append(o)}))}}