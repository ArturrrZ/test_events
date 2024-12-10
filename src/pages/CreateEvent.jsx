import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
function CreateEvent() {
    const navigate = useNavigate();
    const [form, setForm] = useState({title:'', description:''});
    const handleChange = (e) => {
        const { name, value } = e.target; // Получаем имя и значение поля
        setForm((prevForm) => ({
          ...prevForm, // Сохраняем предыдущие значения
          [name]: value, // Обновляем текущее поле
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Отправка POST-запроса
        fetch("https://backend-api-render.onrender.com/api/events/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form), // Преобразование данных формы в JSON
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Event created successfully:", data);
            // Очистить форму после успешного отправления
            setForm({ title: '', description: '' });
            navigate('/')
          })
          .catch((error) => {
            console.error("Error creating event:", error);
          });
      }; 
  return (
    <div>
      Create Form below:
      <form onSubmit={handleSubmit}>
        <input value={form.title} onChange={handleChange} type='text' name='title' required placeholder='Title...'/><br/>
        <textarea value={form.description} onChange={handleChange} type='text' name='description' required placeholder='Description'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateEvent
