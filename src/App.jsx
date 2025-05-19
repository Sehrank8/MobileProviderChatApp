import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";

function App() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, []);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (userInput.trim() === "") return;
        await addDoc(collection(db, "messages"), {
            text: userInput,
            sender: "user",
            createdAt: serverTimestamp(),
            processed: false
        });
        setUserInput("");
    };

    return (
        <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
            <h2>Chatbot</h2>
            <div style={{ border: "1px solid #ccc", height: 400, overflowY: "scroll", padding: 10, marginBottom: 10 }}>
                {messages.map(msg => (
                    <div key={msg.id} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "8px 0" }}>
                        <span style={{
                            display: "inline-block",
                            padding: "8px 12px",
                            borderRadius: "12px",
                            background: msg.sender === "user" ? "#d1e7dd" : "#f8d7da"
                        }}>
                            {msg.text || msg.response}
                        </span>
                        {msg.response && msg.sender === "user" && (
                            <div style={{ textAlign: "left", marginTop: 4, color: "#333" }}>
                                <span style={{
                                    display: "inline-block",
                                    padding: "8px 12px",
                                    borderRadius: "12px",
                                    background: "#e2e3e5"
                                }}>
                                    {typeof msg.response === "string" ? msg.response : JSON.stringify(msg.response)}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={userInput}
                    onChange={e => setUserInput(e.target.value)}
                    placeholder="Type your message"
                    style={{ width: "75%", padding: "8px" }}
                />
                <button type="submit" style={{ padding: "8px 16px", marginLeft: 8 }}>Send</button>
            </form>
        </div>
    );
}

export default App;
