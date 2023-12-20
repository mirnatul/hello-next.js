import React from 'react';

const classNames = (...args) => args.filter(Boolean).join(" "); // filter the falsy value

export default classNames;