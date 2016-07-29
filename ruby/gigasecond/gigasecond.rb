require 'time'

module BookKeeping
  VERSION = 3
end

# :nodoc
class Gigasecond
  def self.from(t)
    Time.at(t.to_i + 10**9)
  end
end
