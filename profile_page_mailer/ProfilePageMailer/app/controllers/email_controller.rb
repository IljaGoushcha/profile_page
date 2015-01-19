class EmailController < ApplicationController

  def send_email
    ProfileMailer.hello_from_profile.deliver
    binding.pry
  end

end
