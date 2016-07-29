# :nodoc
class Pangram
  # rubocop:disable Style/PredicateName
  def self.is_pangram?(str)
    str.downcase.scan(/([a-z])(?!.*\1)/).length == 26
  end
end
