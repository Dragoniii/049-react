import PropTypes from 'prop-types';

function BotaoIncrementar({ incrementar }) {
    return (
        <button onClick={incrementar}>Incrementar</button>
    );
}

BotaoIncrementar.propTypes = {
    incrementar: PropTypes.func.isRequired, 
};

export default BotaoIncrementar;
