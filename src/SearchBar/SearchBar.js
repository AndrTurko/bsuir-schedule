import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const SearchBarWrapper = styled(Paper)`
    margin: 0 auto;
    margin-top: 10px;
    width: 60vw;

    @media only screen and (max-width: 560px) {
          width: 100vw;
        }
`
const StyledInput = styled(Input)`
    padding-left: 10px;
    height: 50px;
`

class SearchBar extends Component {
    render() {
        return (
            <SearchBarWrapper>
                <StyledInput onChange={this.props.handlerGroupNumber} disableUnderline={true} fullWidth placeholder="Номер группы" />
            </SearchBarWrapper>
        );
    }
}


export default SearchBar;
