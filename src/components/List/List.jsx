import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './List.css';
import { motion } from 'framer-motion';

function List() {
  return (
    <div className="list-container">
      <ul className="listbar">
        <motion.li
          className="listbar-item"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Link>한국영화</Link>
        </motion.li>
        <motion.li
          className="listbar-item"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Link>해외영화</Link>
        </motion.li>
        <motion.li
          className="listbar-item"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Link>애니메이션</Link>
        </motion.li>
      </ul>
    </div>
  );
}

export default List;
