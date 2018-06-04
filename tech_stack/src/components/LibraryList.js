import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        // console.log(this.props); //contains the {libraries: state.libraries}
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
    // console.log(state); // shows full library
};
//take global state, map it, and provide as props to component LibraryList
export default connect(mapStateToProps)(LibraryList);

//calls connect function, returns another function, then
//uses that function and calls LibraryList
