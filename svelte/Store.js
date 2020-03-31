import { writable } from 'svelte/store'

const size = 10

export const grid = writable(Array(size).fill().map(() => Array(size).fill(0)))
