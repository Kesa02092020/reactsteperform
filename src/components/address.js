import React from "react";
const forms = ({ formData, setFormdata, setError }) => {
  if (formData.address !== "" && formData.city !== "") {
    setError(true);
  } else {
    setError(false);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) =>
            setFormdata({ ...formData, address: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="City & Pin code"
          value={formData.city}
          onChange={(e) => setFormdata({ ...formData, city: e.target.value })}
        />
      </div>
    </div>
  );
};
export default forms;
