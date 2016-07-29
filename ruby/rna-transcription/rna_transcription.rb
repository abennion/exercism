# :nodoc
class Complement
  def self.m
    { 'G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U' }
  end

  def self.of_dna(s)
    if /[^GCTA]/ =~ s
      ''
    else
      s.split('').map { |e| m[e] }.join('')
    end
  end
end
