extension PatternEquality on Pattern {
  bool equals(other) {
    if (this is RegExp && other is RegExp) {
      return (this as RegExp).pattern == other.pattern;
    } else if (this is String && other is String) {
      return this == other;
    }
    return false;
  }

  bool matches(String value) {
    if (this is RegExp) {
      return (this as RegExp).hasMatch(value);
    } else if (this is String) {
      return this == value;
    }
    return false;
  }
}
