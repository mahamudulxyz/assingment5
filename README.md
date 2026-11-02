# 🚀 Dev Stack

## About the Project

Dev Stack is a web application where developers can explore different technologies and build their own development stack. Users can choose their favorite technologies and manage them in one place.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- JSON
- Lucide React
- React Hot Toast

## ✨ Features

1. **Explore Technologies:** Users can explore different technologies with their descriptions, categories, difficulty levels, and ratings.
2. **Build Your Stack:** Users can add their favorite technologies to create their own stack.
3. **Manage Your Stack:** Users can remove individual technologies or clear the entire stack.

---

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes creating React components easier.

### 2. What is the difference between props and state?

Props pass data from a parent component to a child. State is used to manage data that can change inside a component.

### 3. What does the useState hook do, and where did you use it in this project?

useState helps us manage changing data in React. I used it to manage the selected technologies and store the technology data Promise.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to handle side effects like fetching data. I did not use it in this project.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item and update the list correctly when something changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing UI based on a condition. I used it in the YourStack component to show a message when the stack is empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We pass data using props. A child can send information back by calling a function received from its parent. I used addstack and setaddstack to manage the selected technologies.

Live Site: https://steady-cranachan-eb76a3.netlify.app/
