# :nodoc
class Fixnum
  NUMERALS = {
    1000 => 'M', 900 => 'CM', 500 => 'D', 400 => 'CD',
    100 => 'C', 90 => 'XC', 50 => 'L', 40 => 'XL',
    10 => 'X', 9 => 'IX', 5 => 'V', 4 => 'IV', 1 => 'I'
  }.freeze

  def to_roman
    n = self
    NUMERALS.inject('') do |a, (e, sym)|
      count, n = n.divmod(e)
      a << sym * count
    end
  end
end
