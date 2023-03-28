import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {

}

MyProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;