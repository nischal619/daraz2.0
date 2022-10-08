import React, { useState } from "react";

import { FaStar } from "react-icons/fa";

const ProductCard = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  //
  const styles = {
    header: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      alignItems: "center",
      marginBottom: "1rem",
    },
    card: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      borderRadius: "5px",
      backgroundColor: "#fff",
      transition: "all 0.3s ease",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300,
    },
    button: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: 5,
      cursor: "pointer",
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    label: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: "10px",
    },
    input: {
      width: 300,
      padding: 10,
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      margin: "5px 0",
    },
  };

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.header}> Product Rating </h2>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>

        <label htmlFor="name" style={styles.label}>
          User Name:
        </label>
        <input
          style={styles.input}
          type="text"
          placeholder="input your name.."
        />
        <label htmlFor="name" style={styles.label}>
          Product Name:
        </label>
        <input
          style={styles.input}
          type="text"
          value="Amazon"
          placeholder="input your name.."
        />
        <textarea
          placeholder="What's your experience?"
          style={styles.textarea}
        />

        <button style={styles.button}>Submit</button>
      </div>
    </div>
  );
};

export default ProductCard;
