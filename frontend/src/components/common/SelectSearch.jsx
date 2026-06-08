import Select from 'react-select'

function SelectSearch({
    options = [],
    value,
    onChange,
    placeholder = 'Select...',
}) {
    return (
        <Select
            options={options}
            value={options.find(opt => opt.value === value) || null}
            onChange={(option) => onChange(option?.value || '')}
            placeholder={placeholder}
            isClearable

            styles={{
                control: (base, state) => ({
                    ...base,
                    backgroundColor: '#1b1717',
                    borderColor: state.isFocused ? '#3e3a3a' : '#727070',
                    boxShadow: state.isFocused ? '0 0 0 1px #3e3a3a' : 'none',
                    borderRadius: '10px',
                       height: 40,        // 👈 tambahkan ini
    minHeight: 40,     // 👈 penting juga

                    
                    paddingLeft: '4px',
                    paddingRight: '4px',
                }),

                input: (base) => ({
                    ...base,
                    color: '#e5e5e5',
                }),

                singleValue: (base) => ({
                    ...base,
                    color: '#e5e5e5',
                }),

                placeholder: (base) => ({
                    ...base,
                    color: '#a3a3a3',
                }),

                menu: (base) => ({
                    ...base,
                    backgroundColor: '#1b1717',
                    border: '1px solid #727070',
                    borderRadius: '10px',
                    overflow: 'hidden',
                }),

                option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isFocused
                        ? '#3e3a3a'
                        : state.isSelected
                        ? '#727070'
                        : '#1b1717',
                    color: '#e5e5e5',
                    cursor: 'pointer',
                }),

                clearIndicator: (base) => ({
                    ...base,
                    color: '#a3a3a3',
                }),

                dropdownIndicator: (base) => ({
                    ...base,
                    color: '#a3a3a3',
                }),

                indicatorSeparator: () => ({
                    display: 'none',
                }),
            }}
        />
    )
}

export default SelectSearch