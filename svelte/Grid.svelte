<script>
import { get } from 'svelte/store'
import { grid } from './Store.js'

let gridUI

const icons = ['waves', 'close', 'check', 'directions_boat']

const handleClick = (i, j) => {
  grid.update((data) => {
    data[i][j] = 1
    return data
  })
}

grid.subscribe((data) => {
  gridUI = data
})
</script>

<sb-grid>
  {#each gridUI as column, i (i)}
    <sb-grid-column>
      {#each column as point, j (j)}
        <mwc-button on:click={() => handleClick(i, j)}>
          <mwc-icon>{icons[point]}</mwc-icon>
        </mwc-button>
      {/each}
    </sb-grid-column>
  {/each}
  <slot></slot>
</sb-grid>

<style>
sb-grid {
  display: inline-block;
  background-color: var(--light-gray);
  padding: 40px;
}

sb-grid-column {
  display: flex;
}

mwc-button {
  --mdc-theme-primary: blue;
}
</style>
