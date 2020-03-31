<script>

const fabs = {
  left: {

  }
}
</script>

<sb-placer-box>
  <sb-placer>
    {#each Object.entries(fabs) as [name, dir]}
      <mwc-fab
        class={name}
        mini={true}
        icon={`chevron_${name}`}
        on:click={() => {}}
      />
    {/each}
  </sb-placer>
</sb-placer-box>

<style>
sb-placer-box {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

sb-placer {
  position: absolute;
  display: flex;
  top: 40px;
  left: 40px;
}
</style>