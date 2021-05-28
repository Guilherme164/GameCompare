import React, { useState } from "react";
import "./style.scss";
import { FaSearch } from 'react-icons/fa';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

export default function Buscador(props) {
    const [pesquisa, setPesquisa] = useState("");
    const [storeFilter, setStoreFilter] = useState(false);
    const options = [
        { value: 3, label: 'Amazon' },
        { value: 5, label: 'Blizzard' },
        { value: 11, label: 'Epic Store' },
        { value: 14, label: 'GOG' },
        { value: 26, label: 'GMG' },
        { value: 27, label: 'Humble' },
        { value: 29, label: 'IndieGala' },
        { value: 30, label: 'Itch.io' },
        { value: 35, label: 'Nuuvem' },
        { value: 37, label: 'Origin' },
        { value: 42, label: 'Steam' },
        { value: 43, label: 'Uplay' }
    ];

    function changeLabel(ref) {
        var label = ref.placeholderButtonLabel, value = ref.value;
        if (!value) return label;
        if (Array.isArray(value)) {
            if (value.length === 0) return label;
            if (value.length === 1) return value[0].label;
            return "".concat(value.length, " lojas selecionadas");
        }
        return value.label;
    }

    function inputChange(selected) {
        if (selected && selected.length > 0 && selected.length < options.length) {
            var storeIDs = "";
            selected.map((item) => { storeIDs += item.value + ','; });
            storeIDs = storeIDs.slice(0, -1);
            setStoreFilter(storeIDs);
        } else {
            setStoreFilter(false);
        }
    }

    const customStyles = {
        menuList: base => ({
            ...base,
            width: 150,
            maxHeight: 800,
            overflow: "hidden",
            padding: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
        }),
        menu: base => ({
            ...base,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
        }),
        option: (base, state) => ({
            ...base,
            background: state.isSelected ? 'linear-gradient(to right, #11998e, #38ef7d)' : 'rgb(17, 17, 17)',
            color: state.isSelected ? '#111' : '#11998e',
            "&:hover": { background: state.isSelected ? 'rgb(6, 92, 85)' : 'rgb(35, 35, 35)', }
        })
    };

    return (
        <div className="search-tools">
            <form className="form-search" onSubmit={(event) => {
                event.preventDefault();
                props.buscar(pesquisa, storeFilter);
            }}>
                <div className="search-tools-item" style={{ width: "150px" }}>
                    <div className="filter-select">
                        <ReactMultiSelectCheckboxes className="filter-dropdown" getDropdownButtonLabel={changeLabel} onChange={inputChange} hideSearch={true}
                            placeholderButtonLabel="Todas lojas" options={options} width="150px" styles={customStyles} />
                    </div>
                </div>
                <div className="search-tools-item">
                    <div className="search-field">
                        <input type="input"
                            className="search-input"
                            placeholder="Pesquisar jogo"
                            onChange={(event) => {
                                setPesquisa(event.target.value);
                            }}
                        />
                        <label className="search-label">Pesquisar jogo</label>
                        <div className="search-icon">
                            <button type="submit" className="search-btn" id="search_btn" name="search_btn">
                                <FaSearch size={23}></FaSearch></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}