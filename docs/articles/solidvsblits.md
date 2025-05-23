<style>
  img {
      transition:transform 0.25s ease;
  }

  img:hover {
      -webkit-transform:scale(1.8);
      transform:scale(1.8);
  }
</style>

# Evaluating Lightning 3 Frameworks

Lightning 3 provides the flexibility to choose between bringing your own framework (SolidJS, Vue, or React) or utilizing the official Blits framework developed from scratch by the Lightning team. How should you make this decision?

## Performance Considerations

Performance is paramount, especially on low-end devices. SolidJS boasts approximately 2 to 3 times faster performance compared to Blits, and it also offers a smaller JavaScript footprint (~10kb gzipped), leading to quicker startup times.

<div style="display: flex; justify-content: center; gap: 30px">
  <figure>
    <figcaption>Solid Random Node Creation (26ms)</figcaption>
    <img src="images/Solid-RandomNodes.png" alt="Solid Random Node Creation">
  </figure>

  <figure>
    <figcaption>Blits Random Node Creation (70ms)</figcaption>
    <img src="images/Blits-RandomNodes.png" alt="Blits Random Node Creation">
  </figure>
</div>

#### Bundle Size

<div style="display: flex; justify-content: center; gap: 30px">
  <figure>
    <figcaption>Solid Bundle Size (55k)</figcaption>
    <img src="images/Solid-bundleSize.png" alt="Solid Bundle Size">
  </figure>

  <figure>
    <figcaption>Blits Bundle Size (73k)</figcaption>
    <img src="images/Blits-bundleSize.png" alt="Blits Bundle Size">
  </figure>
</div>

## Device Compatibility

SolidJS has been tested and confirmed working as far back as Chrome 38. It can go back to even older browsers. This will get you same device coverage as Blits.

<img src="images/Chrome38.jpeg" alt="Solid Demo App on Chrome 38">

## Established vs. New

Opting for a framework with a long track record means leveraging a solution that has addressed numerous challenges, enjoys robust community support, and offers extensive code samples. Typically, it's advisable to select an established framework unless the newcomer offers a fundamentally different solution, which isn't the case with Blits. Furthermore, opting for an open-source framework allows you to apply your expertise to various web projects beyond just Lightning-specific ones. SolidJS is a well-established framework with ample tooling and developer resources, facilitating quick adoption. SolidJS is already operational with multiple production applications in progress, while Blits is still developing features that SolidJS already offers (Flex??).

## Debugging Apps

Blits does not currently offer sourcemaps for it's template code.

<div style="display: flex; justify-content: center; gap: 30px">
    <img src="images/Blits-TileSource.png" alt="Blits Source" style="width: 45%;">
    <img src="images/Blits-Debug.png" alt="Blits Debug" style="width: 45%;">
</div>

<br>
With Solid, what you write is what you debug.

<div style="display: flex; justify-content: center; gap: 30px">
    <img src="images/Solid-Debug.png" alt="Blits Debug" style="width: 100%;">
</div>

## Other Important Features

| SolidJS                               | Blits                               |
| ------------------------------------- | ----------------------------------- |
| - Flex Layout System                  | - Layout Component                  |
| - Template Show / If Statements       | - Known Issue (not implemented yet) |
| - Reactive Inline Text Support        | - Known Issue (not implemented yet) |
| - State Management (stores & Signals) | - Components have computed state    |
| - Typescript                          | - Definition files                  |
| - Spreading Props                     | - Must be defined                   |
