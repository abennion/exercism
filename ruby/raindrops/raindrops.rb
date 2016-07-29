# :nodoc
class Raindrops
  def self.m
    { 3 => 'Pling', 5 => 'Plang', 7 => 'Plong' }
  end

  def self.convert(n)
    s = (m.keys.map { |e| (n % e).zero? ? m[e] : '' }).join('')
    s != '' ? s : n.to_s
  end
end
