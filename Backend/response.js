exports.status = (status, values, res,req) => {
  const data = {
    status: status,
    values: values,
  };

  res.status(data.status);
  res.json(data);
  res.end();
};
