import React, { forwardRef } from "react";
import "./message.css";
import { Card, Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

const Message = forwardRef(({ username, msg }, ref) => {
  const isUser = username === msg.username;

  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${msg.username || "Unknown user"} :`} {msg.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
