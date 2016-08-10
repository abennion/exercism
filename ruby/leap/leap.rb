# :nodoc
class Year
  def self.leap?(year)
    if (year % 4).zero?
      return true if (year % 400).zero?
      return false if (year % 100).zero?
      return true
    end
    false
  end
end

module BookKeeping
  VERSION = 2
end
