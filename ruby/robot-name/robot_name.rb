# :nodoc
class Robot
  attr_accessor :name
  @@names = []

  def initialize
    reset
  end

  def generate_random_name
    loop do
      name = ''
      2.times { name << rand(65..90).chr }
      3.times { name << rand(0..9).to_s }
      unless @@names.include? name
        @@names.push name
        return name
      end
    end
  end

  def reset
    @name = generate_random_name
  end
end
