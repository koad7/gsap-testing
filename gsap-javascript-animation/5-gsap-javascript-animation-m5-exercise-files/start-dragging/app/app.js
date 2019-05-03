var gridContainer = $(".gridContainer");

Draggable.create(".movAble",{
    bounds: gridContainer,
    edgeResistance: .65,
});