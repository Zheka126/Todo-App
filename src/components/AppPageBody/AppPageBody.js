import React, {Component} from 'react';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import TodoList from '../TodoList/TodoList';
import Insert from '../Insert/Insert';
import './AppPageBody.css';

export default class AppPageBody extends Component {
  state = {
    data: [
      {
        id: 1,
        label: 'Разработать потрясающее приложение',
        important: false,
        done: false,
      },
      {
        id: 2,
        label: 'Разработать потрясающее 2',
        important: true,
        done: false,
      },
      {
        id: 3,
        label: 'Разработать 3',
        important: false,
        done: true,
      },
    ],
    search: '',
    filter: 'all',
    fatherList: [],
  };

  componentDidUpdate() {
    window.localStorage.setItem(window.now, JSON.stringify(this.state));
  }

  componentDidMount() {
    try {
      window.localStorage.setItem('state', JSON.stringify(this.state));
      // const state = window.localStorage.getItem('state');
      // this.setState({...JSON.parse(state)});
    } catch (e) {}
  }

  getIdx = (array, id) => {
    return array.findIndex((item) => item.id === id);
  };

  createTodoItem = (label) => {
    return {
      id: this.state.data.length + 1,
      label,
      important: false,
      done: false,
    };
  };

  addItem = (text) => {
    this.setState(({data}) => {
      return {data: [...data, this.createTodoItem(text)]};
    });
  };

  onDelete = (id) => {
    this.setState(({data}) => {
      const idx = this.getIdx(data, id);
      return {data: [...data.slice(0, idx), ...data.slice(idx + 1)]};
    });
  };

  onToggleProp = (array, id, propName) => {
    const idx = this.getIdx(array, id);
    const oldItem = array[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [...array.slice(0, idx), newItem, ...array.slice(idx + 1)];
  };

  onToggleImportant = (id) => {
    this.setState(({data}) => {
      return {data: this.onToggleProp(data, id, 'important')};
    });
  };

  onToggleDone = (id) => {
    this.setState(({data}) => {
      return {data: this.onToggleProp(data, id, 'done')};
    });
  };

  onSearchChange = (search) => {
    this.setState({search});
  };

  onFilterChange = (filter) => {
    this.setState({filter});
  };

  search = (items, search) => {
    if (search.length === 0) {
      return items;
    }

    return items.filter(
      (item) => item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
  };

  filter = (items, filter) => {
    switch (filter) {
      case 'all':
      default:
        return items;

      case 'active':
        return items.filter((item) => !item.done);

      case 'done':
        return items.filter((item) => item.done);
    }
  };

  render() {
    const {data, search, filter} = this.state;
    const visibleItems = this.filter(this.search(data, search), filter);
    return (
      <div>
        <div className='useful'>
          <div className='title_today'>
            <h2>Сегодня</h2>
            <span>воскресенье, 18 июля</span>
          </div>
          <Search onSearchChange={this.onSearchChange} />
          <Filter filter={filter} onFilterChange={this.onFilterChange} />
        </div>
        <TodoList
          data={visibleItems}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          onDelete={this.onDelete}
        />
        <Insert onAdd={this.addItem} />
      </div>
    );
  }
}
