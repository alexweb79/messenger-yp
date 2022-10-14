// [1, 2, 3, 4] => 4

function last(list) {
  if (!Array.isArray(list)) {
    return undefined;
  }

  return list.length ? list[list.length - 1] : undefined;
}
