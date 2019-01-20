function insertionSort(list) {
  const ordered = [];

  for (let current = 0; current < list.length; ++current) {
    let pointer = current;

    while (pointer > 0 && list[current] < ordered[pointer - 1]) {
      --pointer;
    }

    const item = list[current];
    ordered.splice(pointer, 0, item); // insert item in new position
  }

  return ordered;
}
