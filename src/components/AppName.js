import * as React from  'react'

const styles = {
    color: '#FAFAFA',
    marginTop: '2rem',
    position: 'relative',
}

export default function AppName() {
    return (
        <h1 data-testid="app-header" style={styles}>ToDo App</h1>
    )
}