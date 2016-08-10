# :nodoc
class Phrase
  def initialize(str)
    @str = str
  end

  def word_count
    @str.downcase.scan(/\b[\w']+\b/).each_with_object({}) do |e, r|
      if r.key?(e)
        r[e] += 1
      else
        r[e] = 1
      end
      r
    end
  end
end

module BookKeeping
  VERSION = 1
end
