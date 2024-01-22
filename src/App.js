import React, { useState, useEffect } from "react"

export default function Register() {
    const [form, setForm] = useState({
        "Fullname": "",
        "Age": "",
        "Email": "",
        "Phone": "+996"
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const realTime = (e) => {
        const { name, value } = e.target

        if (name === "Phone" && value.length <= 16) {
            setForm({
                ...form,
                [name]: value,
            })
        } else if (name !== "Phone") {
            setForm({
                ...form,
                [name]: value,
            })
        }
    }

    const handleRegister = () => {
        if (!form.Fullname || !form.Age || !form.Email || !form.Phone) {
            setError("Пожалуйста, заполните все поля.")
            return
        }

        setLoading(true)
        setError("")


        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#f6f6f6",
            minHeight: "100vh",
            fontFamily: "Arial, sans-serif",
            padding: "25px",
        }}>
            <h2 style={{ marginBottom: "20px" }}>Регистрация by Myxa.</h2>
            <form style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                padding: "35px"

            }}>
                <label style={{ marginBottom: "10px" }}>
                    <input
                        style={{
                            borderRadius: "4px",
                            padding: "8px",
                            marginTop: "4px",
                            border: "1px solid #ccc",
                        }}
                        type="text"
                        name="Fullname"
                        value={form.Fullname}
                        onChange={realTime}
                        placeholder="ФИО"
                    />
                </label>

                <label style={{ marginBottom: "10px" }}>
                    <input
                        style={{
                            borderRadius: "4px",
                            padding: "8px",
                            marginTop: "4px",
                            border: "1px solid #ccc",
                        }}
                        type="text"
                        name="Age"
                        value={form.Age}
                        onChange={realTime}
                        placeholder="Ваш возраст"
                    />
                </label>

                <label style={{ marginBottom: "10px" }}>
                    <input
                        style={{
                            borderRadius: "4px",
                            padding: "8px",
                            marginTop: "4px",
                            border: "1px solid #ccc",
                        }}
                        type="text"
                        name="Email"
                        value={form.Email}
                        onChange={realTime}
                        placeholder="Ваша эл.почта"
                    />
                </label>

                <label style={{ marginBottom: "10px" }}>
                    <input
                        style={{
                            borderRadius: "4px",
                            padding: "8px",
                            marginTop: "4px",
                            border: "1px solid #ccc",
                        }}
                        type="text"
                        name="Phone"
                        value={form.Phone}
                        onChange={realTime}
                        placeholder="Ваш номер телефона"
                    />
                </label>
            </form>

            <div style={{
                marginTop: "20px",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}>
                <h3>Данные в РеалТайм):</h3>
                <p><strong>ФИО: {form.Fullname}</strong></p>
                <p><strong>Возраст: {form.Age}</strong></p>
                <p><strong>Электронная почта: {form.Email}</strong></p>
                <p><strong>Номер телефона: {form.Phone}</strong></p>
            </div>

            <button
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "16px",
                }}
                onClick={handleRegister}
                disabled={loading}
            >
                {loading ? "Загрузка..." : "Зарегистрироваться"}
            </button>
        </div>
    )
}
