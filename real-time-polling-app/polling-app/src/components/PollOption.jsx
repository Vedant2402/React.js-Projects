function PollOption({ option, selected, onSelect, isMultiple }) {
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <label style={{ cursor: 'pointer' }}>
        <input
          type={isMultiple ? "checkbox" : "radio"}
          name="option"
          checked={selected}
          onChange={onSelect}
          style={{ marginRight: '0.5rem' }}
        />
        {option.text}
      </label>
    </div>
  );
}

export default PollOption;
