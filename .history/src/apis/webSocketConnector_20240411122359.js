import { useEffect } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

function WebSocketConnector({ onMessageReceived }) {
  useEffect(() => {
    const socket = new SockJS('/ws')
    const stompClient = Stomp.over(socket)

    stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame)

      stompClient.subscribe('/topic/updates', function (messageOutput) {
        onMessageReceived(JSON.parse(messageOutput.body))
      })
    })

    return () => {
      if (stompClient) {
        stompClient.disconnect()
      }
    };
  }, [onMessageReceived])

  return null
}

export default WebSocketConnector