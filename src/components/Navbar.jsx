import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>PROJECT3</h1>
            <ul style={styles.navLinks}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/about" style={styles.navLink}>About</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/contact" style={styles.navLink}>Contact</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/Login" style={styles.navLink}>Login</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/Props" style={styles.navLink}>Props</Link>
                </li>
            </ul>
        </nav>
    );
};
const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: 'white',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Add shadow for depth
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold', // Make the logo bold
    },
    navLinks: {
        listStyleType: 'none',
        display: 'flex',
        gap: '30px', // Increased gap for better spacing
    },
    navItem: {
        margin: 0,
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        padding: '8px 16px', // Add padding for clickable area
        borderRadius: '5px', // Rounded corners for links
        transition: 'background-color 0.3s, color 0.3s', // Smooth transition for hover
    },
    // Hover styles for navLink
    navLinkHover: {
        backgroundColor: '#555', // Change background on hover
        color: '#fff', // Change text color on hover
    }
};



export default Navbar;
